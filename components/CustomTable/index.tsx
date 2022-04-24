import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useNumberInput,
  useToast,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ARIA_REMOVE_PRODUCT } from "../../utils/constants/index";
import { CartItem } from "../../utils/interfaces/cart";
import { CustomTable } from "../../utils/interfaces/components";
import theme from "../../utils/theme";
import CustomIconButton from "../IconButton";

const CustomTable: FC<CustomTable> = ({
  titles,
  rowData,
  incrementQTY,
  decrementQTY,
  handleChange,
  deleteRow,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput();
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];
  const [value, setValue] = useState<number>(1);

  const inc = getIncrementButtonProps;
  const dec = getDecrementButtonProps;
  const input = getInputProps;

  const handleInc = (sku: string, quantity: number) => {
    const item = rowData?.find((product) => product.sku === sku);
    let newQty: CartItem = { ...item, quantity };
    incrementQTY(newQty, quantity);
  };
  const handleDec = (sku: string, quantity: number) => {
    if (quantity === 0) {
      return;
    }
    const item = rowData?.find((product) => product.sku === sku);
    let newQty: CartItem = { ...item, quantity };
    decrementQTY(newQty, quantity);
  };

  const handleInputChange = (
    value_str: string,
    value_num: number,
    stockLevel: number,
    sku: string
  ) => {
    const item = rowData?.find((product) => product.sku === sku);
    const toNum = Number(value_str);
    if (isNaN(value_num) || !value_num || !value_str || !toNum) {
      setValue((prev) => {
        if (prev && isNaN(prev)) {
          return 0;
        }

        return 1;
      });

      toast({
        title: "Quantity cannot be left empty",
        description: `That's not a valid number! Please use a number from 0 -> ${stockLevel} !`,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      if (item && value) {
        return handleChange(item, value, sku);
      }
    }
    if (value_num > stockLevel) {
      setValue((prev) => {
        return stockLevel;
      });
      toast({
        title: "Max Stock Reached.",
        description: `That's not a valid number! Please use a number from 0 -> ${stockLevel} !`,
        status: "warning",
        duration: 3500,
        isClosable: true,
      });

      if (item && value) {
        return handleChange(item, value, sku);
      }
    }

    if (value_num < 0) {
      setValue((prev) => {
        return 0;
      });
      toast({
        title: "Stock Warning.",
        description: `There isn't that many items! Please use a number from 0 -> ${stockLevel} !`,
        status: "warning",
        duration: 3500,
        isClosable: true,
      });

      if (item && value) {
        return handleChange(item, value, sku);
      }
    }
    setValue((prev) => {
      return value_num;
    });
    if (item && value) {
      return handleChange(item, value_num, sku);
    }
    return value;
  };

  const handleCost = (price: number, quantity: number, stockLevel: number) => {
    if (value) {
      if (quantity > stockLevel) {
        return `£ ${price * quantity}`;
      }
      if (quantity < 0) {
        return `£ ${price * quantity}`;
      }

      return `£ ${Number(price * quantity).toFixed(2)}`;
    }

    if (!value || isNaN(value)) {
      return `Error calculating cost... Please correct QTY field.`;
    }
  };

  const handleTrash = (sku: string) => {
    const item = rowData?.find((product) => product.sku === sku);

    if (item) {
      return deleteRow(item);
    }
  };
  return (
    <Flex>
      {rowData && rowData?.length > 0 ? (
        <TableContainer p={5}>
          <Table size="sm">
            <TableCaption>Tito&apos;s basket... one last step! 🥳</TableCaption>

            <Thead>
              <Tr>
                {titles.map((title, i) => (
                  <Th key={i}>{title}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {rowData &&
                rowData.map(
                  ({ name, price, quantity, sku, stockLevel }, id) => {
                    if (quantity === 0) {
                      return;
                    }

                    if (quantity && name && price && sku && stockLevel)
                      return (
                        <Tr
                          key={id}
                          alignContent={"center"}
                          justifyContent="center"
                        >
                          <Td>{name}</Td>
                          <Td>£{price}</Td>

                          <Td>
                            <NumberInput
                              {...input}
                              onChange={(
                                valueAsString: string,
                                valueAsNumber: number
                              ) =>
                                handleInputChange(
                                  valueAsString,
                                  valueAsNumber,
                                  stockLevel,
                                  sku
                                )
                              }
                              min={1}
                              max={stockLevel}
                              defaultValue={quantity}
                              inputMode="numeric"
                              width="100%"
                            >
                              <NumberInputField
                                min={1}
                                onChange={() => handleInputChange}
                                max={stockLevel}
                                defaultValue={quantity}
                                inputMode="numeric"
                                width="100%"
                                {...input}
                              />
                              <NumberInputStepper>
                                <NumberIncrementStepper
                                  {...inc}
                                  onChange={() => handleInputChange}
                                  onClick={() => handleInc(sku, quantity + 1)}
                                />
                                <NumberDecrementStepper
                                  {...dec}
                                  onChange={() => handleInputChange}
                                  onClick={() => handleDec(sku, quantity - 1)}
                                />
                              </NumberInputStepper>
                            </NumberInput>
                          </Td>
                          <Td>
                            <Flex
                              width={"100%"}
                              justify={"space-between"}
                              align="center"
                            >
                              {handleCost(price, quantity, stockLevel)}
                              <CustomIconButton
                                customAriaLabel={ARIA_REMOVE_PRODUCT}
                                aria-label={ARIA_REMOVE_PRODUCT}
                                size="lg"
                                color={theme.colors.brand.companyBlue}
                                icon={<FaTrashAlt />}
                                variant="ghost"
                                onClick={() => handleTrash(sku)}
                              />
                            </Flex>
                          </Td>
                        </Tr>
                      );
                  }
                )}
            </Tbody>
          </Table>
        </TableContainer>
      ) : null}
    </Flex>
  );
};

export default CustomTable;
