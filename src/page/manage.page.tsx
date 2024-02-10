import { useState } from "react";
import ManageTable from "../component/Table";
import Form from "../component/form";
import { Section, Wrapper } from "../emotion/global.style";

const Manage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Section>
        <Form
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        <ManageTable handleClickOpen={handleClickOpen} />
      </Section>
    </Wrapper>
  );
};

export default Manage;
