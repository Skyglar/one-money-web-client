import { Button, DatePicker } from "antd";

interface IProps {
  onEditClicked: () => void;
}

export const CategoryHeader = (props: IProps) => {
  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    top: 10,
    right: 10,
    marginLeft: 8,
  };

  // put it in separate scss file
  const styles = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 5,
  } as const;

  return (
    <div>
      <div style={styles}>
        <div>
          {/* this is gonna be dropdown for accounts */}
          <p>All accounts</p>
          <p>93 839 UAH</p>
        </div>
        <div>
          <DatePicker />
        </div>
      </div>

      <Button type="primary" style={buttonStyle} onClick={props.onEditClicked}>
        Edit
      </Button>
    </div>
  );
};
