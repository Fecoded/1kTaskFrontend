import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  getCurrentContact,
  deleteContact,
} from "../../redux/contact/contact.action";
import { selectCurrentContact } from "../../redux/contact/contact.selector";

const ContactItem = ({
  contact,
  getCurrentContact,
  deleteContact,
  currentContact,
}) => {
  const onUpdateContact = () => {
    getCurrentContact(contact);
  };

  const onDeleteContact = () => {
    // getCurrentContact(contact);
    deleteContact(contact.id);
  };

  return (
    <tr className="priority-200">
      <td data-label="First Name">{contact.name}</td>
      <td data-label="Last Name">{contact.authorName}</td>
      <td data-label="Email Address">{contact.publishedDate}</td>

      <td className="edit" onClick={onUpdateContact}>
        <i className="fa fa-edit"></i>
      </td>
      <td className="edit" onClick={onDeleteContact}>
        <i className="fa fa-trash"></i>
      </td>
      <td></td>
    </tr>
  );
};

const mapStateToProps = createStructuredSelector({
  currentContact: selectCurrentContact,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentContact: (contact) => dispatch(getCurrentContact(contact)),
  deleteContact: (formData) => dispatch(deleteContact(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
