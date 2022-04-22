import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { CustomTable } from "../../utils/interfaces/components";

const CustomTable: FC<CustomTable> = ({
  titles,
  rowData,
  incrementQTY,
  decrementQTY,
  setQuantity,
}) => {
  const [cost, setCost] = useState(0);
  return (
    <Flex>
      <TableContainer>
        <Table>
          <TableCaption>Tito&apos;s basket... one last step! 🥳</TableCaption>

          <Thead>
            <Tr>
              {titles.map((title, i) => (
                <Th key={i}>{title}</Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            <Tr alignContent={"center"} justifyContent="center">
              {rowData &&
                rowData.map(({ defaultProductVariant }, id) => {
                  <>
                    <Td>{defaultProductVariant.title}</Td>
                    <Td>{defaultProductVariant.price}</Td>
                    <Td>{defaultProductVariant.stock}</Td>
                    <Td>{defaultProductVariant.stock}</Td>
                  </>;

                  // if (id === rowData.length - 1) {
                  //   return (
                  //     <Td key={id}>
                  //       £ {item}
                  //       <CustomIconButton
                  //         aria-label={ARIA_REMOVE_PRODUCT}
                  //         customAriaLabel={ARIA_REMOVE_PRODUCT}
                  //         icon={<FaTrashAlt />}
                  //       />
                  //     </Td>
                  //   );
                  // }

                  // if (typeof item === "number") {
                  //   if (item % 1 === 0 && id !== rowData.length - 1) {
                  //     return (
                  //       <Td key={id}>
                  //         <NumberInput defaultValue={item} min={0}>
                  //           <NumberInputField
                  //             onChange={(
                  //               e: React.ChangeEvent<HTMLInputElement>
                  //             ) => setQuantity(e.target.value)}
                  //           />
                  //           <NumberInputStepper>
                  //             <NumberIncrementStepper onClick={incrementQTY} />
                  //             <NumberDecrementStepper onClick={decrementQTY} />
                  //           </NumberInputStepper>
                  //         </NumberInput>
                  //       </Td>
                  //     );
                  //   }

                  //   return <Td key={id}>£ {item}</Td>;
                  // }
                  // return <Td key={id}>{item}</Td>;
                })}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default CustomTable;
