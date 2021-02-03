import React from "react";
import * as Styles from "./styles";

const MenuItems: React.FC<any> = (props: any) => {
  
  return (
          <Styles.itemText>
            <div>
              <span onClick={() => props.startCPUMode()}>
                Speler vs CPU
              </span>
            </div>
            <div>
              <span onClick={() => props.startTwoPlayerMode()}>
                Speler vs Speler
              </span>
            </div>
           
          </Styles.itemText>
    );
}

export default MenuItems;