import React, {useState} from "react";
import CustomButton from "@ui/CustomButton";

function NavBar() {

    let [isOpen, setIsOpen] = useState(false)


  return (
    <nav class=" max-w-[85rem] bg-white px-5 py-4  mx-auto flex justify-between items-baseline">
      <h1 class=" font-bold text-4xl text-indigo-800">Arceus</h1>

      <ul class=" inline-flex gap-5 text-lg font-medium">
        <li>Discover</li>
        <li onMouseEnter={()=> setIsOpen(true)} onClick={()=> setIsOpen(true)} className=" cursor-pointer">
          Service

          {isOpen && 
          <div class="relative mx-auto" onMouseLeave={()=> setIsOpen(false)}>
            <div class=" absolute mt-10 p-5 gap-32  mx-auto bg-white rounded-md shadow-xl grid grid-cols-5">
              <div class="grid col-span-3 gap-2">
                <div class="flex gap-2">
                  <CustomButton title="C" />
                  <div class=" flex flex-col ">
                    <h3 class=" text-md font-bold text-gray-900">
                      App Development
                    </h3>
                    <p class="text-sm text-gray-400">
                      We hehhsb akjjksnd jskdj
                    </p>
                  </div>
                </div>

                <div class="flex gap-2">
                  <CustomButton title="C" />
                  <div class=" flex- felx-col ">
                    <h3 class=" text-md font-bold text-gray-900">
                      Social Media
                    </h3>
                    <p class="text-sm text-gray-400">
                      We hehhsb akjjksnd jskdj
                    </p>
                  </div>
                </div>

                <div class="flex gap-2">
                  <CustomButton title="C" />
                  <div class=" flex- felx-col ">
                    <h3 class=" text-md font-bold text-gray-900">
                      Web Development
                    </h3>
                    <p class="text-sm text-gray-400">
                      We hehhsb akjjksnd jskdj
                    </p>
                  </div>
                </div>
              </div>

              <div class=" bg-black w-full h-fulll rounded-md col-span-2"></div>
            </div>
          </div>}
        </li>
        <li>Blog</li>
        <li>Company</li>
        <li>About Us</li>
      </ul>

      <CustomButton title="Contact Us"  />
    </nav>
  );
}

export default NavBar;
