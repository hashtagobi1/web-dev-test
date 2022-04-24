import {
  Flex,
  useOutsideClick,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation, Variants } from "framer-motion";
import React, { FC, useRef } from "react";
import { FaShoppingBasket, FaWindowClose } from "react-icons/fa";
import { ARIA_CHECKOUT, navItems } from "../../utils/constants";
import { Sidebar } from "../../utils/interfaces/components";
import theme from "../../utils/theme";
import CustomIconButton from "../IconButton";
import NavButton from "../NavButton";

const Motion_SideMenu = motion(motion.nav);

const Sidebar: FC<Sidebar> = ({ isVisible, handleClick }) => {
  const _ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const ref = useRef();
  useOutsideClick({
    ref: _ref,
    handler: () => startAnimation(),
  });
  const controls = useAnimation();

  controls.start({
    opacity: 1,
    x: "0px",
    y: "0px",
    transition: {
      duration: 0.5,
    },
    zIndex: 250,
  });
  const startAnimation = () => {
    handleClick();
  };
  /**
   * For accessibility reasons, the system will minimized non essential reasons if user has requested i
   */
  const prefersReducedMotion = usePrefersReducedMotion();
  const variants: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: {
          zIndex: 250,
          opacity: 0,
          x: "100px",
          y: "-100px",
          transition: {
            duration: 0.5,
          },
        },
        show: {
          opacity: 1,
          x: "0px",
          y: "0px",
          transition: {
            duration: 0.5,
          },
          zIndex: 250,
        },
      };

  // TODO: why doesn't it animate?

  return (
    <AnimatePresence>
      isVisible && (
      <Motion_SideMenu
        variants={variants}
        exit={isVisible ? "show" : "hidden"}
        key="sidemenu-container"
      >
        <Flex
          ref={ref.current}
          bgColor="rgba(0,0,0,.5)"
          width={"100vw"}
          height="100vh"
          position={"fixed"}
          zIndex={150}
          opacity={1}
          transition={"all 1.5s ease-in-out"}
        >
          <Flex
            ref={ref.current}
            boxShadow={"2xl"}
            position={"fixed"}
            top={"1%"}
            zIndex={100}
            direction={"column"}
            right="3%"
            p={5}
            opacity={1}
            justifyContent="space-between"
            overflow={"hidden"}
            bg={theme.colors.brand.companyWhite}
            borderRadius="5%"
          >
            <Flex justify={"end"} zIndex={600}>
              <CustomIconButton
                icon={<FaWindowClose />}
                customAriaLabel="close"
                aria-label="close"
                variant="ghost"
                onClick={startAnimation}
              />
            </Flex>
            {navItems.map((item, i) => {
              return (
                <Flex zIndex={600} key={`${item}-button:-${i}`}>
                  <NavButton
                    variant="ghost"
                    key={i}
                    link={`${item.toLowerCase()}`}
                    text={item}
                  />
                </Flex>
              );
            })}
            <Flex justify={"center"}>
              <CustomIconButton
                variant="ghost"
                customAriaLabel={ARIA_CHECKOUT}
                aria-label={ARIA_CHECKOUT}
                link="checkout"
                icon={<FaShoppingBasket />}
              />
            </Flex>
          </Flex>
        </Flex>
      </Motion_SideMenu>
      )
    </AnimatePresence>
  );
};

export default Sidebar;
