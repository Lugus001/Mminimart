import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import Logo from "/src/assets/Logo.png";
import basket from "/src/assets/basket.png";

const NavBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleLoginOpen = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full h-[6rem] bg-grey border-b-bgrey flex items-center justify-between px-2 sm:px-4">
        <img src={Logo} alt="Logo" className="h-16 w-16 sm:h-20 sm:w-20" />
        <div className="relative w-full max-w-[10rem] sm:max-w-md">
          <input
            type="text"
            id="ค้นหาสินค้า"
            className="bg-white border border-bgrey rounded-full block w-full p-2  sm:p-3 font-prompt text-bg"
            placeholder="ค้นหาสินค้า... "
          />
          <button
            type="button"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-orange-100 rounded-full min-w-[3rem] sm:min-w-[8rem] h-full hover:bg-yellow font-prompt text-black text-xs sm:text-sm"
          >
            ค้นหา
          </button>
        </div>

        <button type="button" onClick={handleDialogOpen}>
          <img src={basket} alt="basket" className="h-25 w-24" />
        </button>

        <button
          type="button"
          className="border border-black rounded-full min-w-[8rem] h-8 sm:min-w-[5rem] phone:min-w-[4rem] sm:h-10 font-prompt sm:text-xs phone:text-xs"
          onClick={handleDialogOpen}
        >
          เข้าสู่ระบบ
        </button>
      </nav>

      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          style: {
            width: "400px",
            maxWidth: "90%",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      >
        <p className="p-4 font-prompt text-xl text-center font-bold">
          จำเป็นต้องเข้าสู่ระบบ
        </p>
        <div className=" border border-yellow-100 ml-[5rem]  mr-[5rem] "></div>
        <DialogContent>
          <p className="font-prompt text-center text-grey-300">
            คุณจำเป็นต้องเข้าสู่ระบบก่อน{" "}
          </p>
          <p className="font-prompt text-center text-grey-300">
            หากคุณต้องการที่จะซื้อสินค้ากับทางเรา
          </p>
        </DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <Button
            onClick={handleDialogClose}
            color="primary"
            sx={{
              width: "8rem",
              border: "1px solid black",
              borderRadius: "1rem",
              fontFamily: "Prompt",
              color: "black",
              "&:hover": {
                backgroundColor: "#e5e5e5",
              },
            }}
          >
            ปิดหน้าต่าง
          </Button>

          <Button
            onClick={handleLoginOpen}
            sx={{
              width: "8rem",
              border: "none",
              borderRadius: "1rem",
              color: "black",
              fontFamily: "Prompt",
              backgroundColor: "#FFC51B",
            }}
          >
            เข้าสู่ระบบ
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default NavBar;
