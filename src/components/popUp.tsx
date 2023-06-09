import { PopUpProps } from "../constants/constants";

export const PopUP = (props: PopUpProps) => {
  return (
    <div
      className={props.status ? "pop-up-active" : "pop-up"}
      onClick={() => props.setPopUP(false)}
    >
      <div className="pop-up__content" onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  );
};
