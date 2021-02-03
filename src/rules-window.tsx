import React from "react";
import * as Styles from "./styles";

const RulesWindow: React.FC<any> = (props: any) => { 
  return (
    <Styles.rulesWindow><span>{props.contents}</span>
        <Styles.styledButton onClick={() => props.readRules()}>Begrepen</Styles.styledButton>
    </Styles.rulesWindow>
    );
}

export default RulesWindow;