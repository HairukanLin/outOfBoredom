import {IconComponentType} from "@/types/IconComponentTypes";

export default function IConButtonComponent({iconConfig}: { iconConfig: IconComponentType }) {
    return (
        <img
            src={iconConfig.iconURL}
            onClick={iconConfig.onPressed}
            alt=""
            role="button"
            style={{cursor: "pointer", paddingLeft: "1.25rem", paddingRight: "1.25rem"}}
        />
    );
}
