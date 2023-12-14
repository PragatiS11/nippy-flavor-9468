"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import AdminRoutes from "../Routes/AdminRoutes";
import { useEffect, useState } from "react";
import Dashboard from "../Pages/Dashboard";
import AdminUsers from "../Pages/AdminUsers";
import AdminCategories from "../Pages/AdminCategories";
import AdminEvents from "../Pages/AdminEvents";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AdminSettings from "../Pages/AdminManage";
import UserByAdmin from "../Pages/UserByAdmin";
import AdminProfile from "../Pages/AdminProfile";
import { DonationRequest } from "../../User/Utilis/api";
import { useDispatch } from "react-redux";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, link: "/admin/dashboard/" },
  { name: "Users", icon: FiTrendingUp, link: "/admin/users/" },
  {
    name: "Donations",
    icon: FiCompass,
    link: "/admin/category/",
  }
  // { name: "Manage", icon: FiSettings, link: "/admin/settings/" },
];

const SidebarContent = ({ setSearchParams, setlink, onClose, ...rest }) => {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    //
    setSearchParams({ path: path });
    setlink(path);
  };
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {/* logo */}

          <img
            src="https://i.ibb.co/0qSN97p/retina-ngo2.png"
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => setSearchParams({ path: "/admin" })}
          />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => handleButtonClick(link.link)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  const [params, setSearchParams] = useSearchParams("" || { path: "/admin" });

  const handleNav = (link) => {
    console.log(link, children);
  };
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "green",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
        {/*  give appropriate click functionality and name */}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ setSearchParams, onOpen, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        m={"auto"}
        textAlign={"center"}
        fontFamily="monospace"
        fontWeight="bold"
      >
        <Image
          src="https://i.ibb.co/0qSN97p/retina-ngo2.png"
          w={"50%"}
          alt=""
        />
        {/*  */}
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2381999.jpg"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              {/* <MenuItem
                onClick={() => setSearchParams({ path: "/admin/profile/" })}
              >
                Profile
              </MenuItem> */}
              {/* <MenuItem
                onClick={() => setSearchParams({ path: "/admin/settings/" })}
              >
                Manage
              </MenuItem> */}
              {/* <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem onClick={() => navigate("/")}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const AdminNavbar = () => {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Link, setLink] = useState("");

  const [params, setSearchParams] = useSearchParams("" || { path: "/admin" });
  console.log(params.get("path").split("/")[3], "i dont know bro");

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        setlink={setLink}
        setSearchParams={setSearchParams}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav setSearchParams={setSearchParams} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
        {params.get("path") === "/admin" && <Dashboard />}
        {params.get("path") === "/admin/dashboard/" && <Dashboard />}
        {params.get("path") === "/admin/users/" && <AdminUsers />}
        {params.get("path") === "/admin/category/" && <AdminCategories />}
        {params.get("path") === "/admin/events/" && <AdminEvents />}
        {params.get("path") === "/admin/settings/" && <AdminSettings />}
        {params.get("path").split("/")[3] === "singleUser" && (
          <UserByAdmin id={params.get("path").split("/")[4]} />
        )}
        {params.get("path") === "/admin/profile/" && <AdminProfile />}

        {/* <AdminRoutes /> */}
      </Box>
    </Box>
  );
};

export default AdminNavbar;
