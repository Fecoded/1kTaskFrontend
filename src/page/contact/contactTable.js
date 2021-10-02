import React from "react";

import ContactItem from "./contactItem";
import { Table } from "./style";

const contactTable = ({ contacts }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author Name</th>
            <th>Published Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default contactTable;
