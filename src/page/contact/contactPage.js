import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  getContacts,
  addContact,
  clearCurrent,
  updateContact,
} from "../../redux/contact/contact.action";
import {
  selectContacts,
  selectCurrentContact,
} from "../../redux/contact/contact.selector";
import { logout } from "../../redux/user/user.action";

import { Card, FormControl, Container } from "./style";
import { Form } from "../../components/form";

import ContactTable from "./contactTable";
import moment from "moment";

const ContactPage = ({
  getContacts,
  contacts,
  addContact,
  currentContact,
  clearCurrent,
  updateContact,
  logout,
}) => {
  const [name, setFirstname] = useState("");
  const [authorName, setLastname] = useState("");
  const [publishedDate, setEmail] = useState("");

  useEffect(() => {
    getContacts();

    if (currentContact) {
      setFirstname(currentContact.name);
      setLastname(currentContact.authorName);
      setEmail(moment(currentContact.publishedDate).format("YYYY-MM-DD"));
    }
  }, [getContacts, currentContact]);

  // const getBase64 = (file, callback) => {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result));
  //   reader.readAsDataURL(file);
  // };

  // const fileTransform = (e) => {
  //   getBase64(e.target.files[0], (base64String) => {
  //     setImage(base64String);
  //   });
  // };

  const clearAll = () => {
    clearCurrent();
    setFirstname("");
    setLastname("");
    setEmail("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentContact === null) {
      addContact({
        name,
        authorName,
        publishedDate,
      });
    } else {
      updateContact({
        id: currentContact.id,
        name,
        authorName,
        publishedDate,
      });
    }

    clearAll();
  };

  return (
    <>
      <p className="logout" onClick={() => logout()}>
        Logout
      </p>
      <Container>
        <Card>
          <Form onSubmit={onSubmit}>
            <h3>Library Manager</h3>
            <FormControl>
              <input
                type="text"
                name="name"
                value={name || ""}
                placeholder="Name"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <input
                type="text"
                name="authorName"
                value={authorName || ""}
                placeholder="Author Name"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <input
                type="date"
                name="publishedDate"
                value={publishedDate || ""}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <input
              type="submit"
              value={currentContact ? "Update Book" : "Add Book"}
            />
            {currentContact && <button onClick={clearAll}>Clear</button>}
          </Form>
          <ContactTable contacts={contacts} />
        </Card>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  contacts: selectContacts,
  currentContact: selectCurrentContact,
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
  addContact: (formData) => dispatch(addContact(formData)),
  updateContact: (formData) => dispatch(updateContact(formData)),
  clearCurrent: () => dispatch(clearCurrent()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
