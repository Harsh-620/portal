import { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import "./styles.scss";

const CompanyReports = () => {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };
  return (
    <>
      <MDBRow>
        <MDBCol size="3">
          <MDBTabs className="flex-column text-center">
            <MDBTabsItem>
              <MDBTabsLink
                className="details-tab"
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                2021
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                className="details-tab"
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                2020
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
          <MDBTabsContent>
            <MDBTabsPane
              className="details-pane"
              show={verticalActive === "tab1"}
            >
              <p>
                Round 1 - Online Coding Test Duration: 360 Minutes. 6 Coding
                questions were given from which successfully completing 1 is
                considered passed Round 2 - Technical Interview Questions asked
                in this round were What all programming languages do you use?
                Explain the codevita codes you wrote. What platform you used in
                coding? TCS is service-based or product-based? Why you tried to
                solve the particular question in this way only, elaborate your
                approach. What is your favorite subject? Some questions related
                to your subject. Explain SQL and PSQL. Difference between drop
                and truncate command. What is DDL, DML, which one does the
                update come under? What is alter command? What is hashing and
                file handling? What is rollback? How do you do rollback? All
                OOPs concept questions were asked such as What is abstraction?
                Tell me about classes and objects. What is polymorphism? What do
                you mean by Inheritance? Tell me about object overloading?\.
                What is operator overloading? What is method overriding? Tell me
                about encapsulation Explain your projects Did you do any of
                these projects in lockdown? Explain your lockdown project in
                detail. Share URL where your project is deployed What are
                callbacks in NodeJS? Round 3 - Manegerial Round Questions asked
                in this round were Introduce yourself You have a family issue
                and you are working on a project, how will you handle that? What
                if your teammates aren’t cooperative, how would you ensure work
                is done on time? Any problems you faced in your project and how
                did you overcome that issue If you have to work in shifts, then
                how will you manage. Will there be any problem if we ask you to
                relocate? If you get stuck at some place or in your project,
                then what will be your approach? If you are working in a team
                for the last 10 years and next year you get promoted as a team
                leader but in the 12th year, you are demoted as a normal team
                member. What will be your reaction? Will you continue to work
                with that team? You are going on vacation but suddenly some
                important work arises in the company. You are not allowed to
                share your username and password. What would you do? Round 4 -
                HR Round Questions asked in this round were Are you comfortable
                with relocation? Do you know about a 1-year bond? What if you
                get on-site in a small country which is totally new to you, how
                would you handle the pressure personally and professionally
                both? Since TCS works on all sorts of old to new technologies,
                what if you get to work on an old domain/technology, how would
                you react? Who is the CEO, chairman and founder of TCS? How many
                employees work in TCS? How much revenue it generates every year?
                Are you ready to accept bonds? Are you comfortable to work in
                night shifts? If we relocate you to Pakistan, will you work
                there? Is there any backlogs? Student will be asked to present
                soft copies of all documents such as 10th Marksheet 12th
                Marksheet Passing Certificates Govt. ID B.Tech Marksheet
              </p>
            </MDBTabsPane>
            <MDBTabsPane
              className="details-pane"
              show={verticalActive === "tab2"}
            >
              <p>
                Round 1 - Online Coding Test Duration: 360 Minutes. 6 Coding
                questions were given from which successfully completing 1 is
                considered passed Round 2 - Technical Interview Questions asked
                in this round were What all programming languages do you use?
                Explain the codevita codes you wrote. What platform you used in
                coding? TCS is service-based or product-based? Why you tried to
                solve the particular question in this way only, elaborate your
                approach. What is your favorite subject? Some questions related
                to your subject. Explain SQL and PSQL. Difference between drop
                and truncate command. What is DDL, DML, which one does the
                update come under? What is alter command? What is hashing and
                file handling? What is rollback? How do you do rollback? All
                OOPs concept questions were asked such as What is abstraction?
                Tell me about classes and objects. What is polymorphism? What do
                you mean by Inheritance? Tell me about object overloading?\.
                What is operator overloading? What is method overriding? Tell me
                about encapsulation Explain your projects Did you do any of
                these projects in lockdown? Explain your lockdown project in
                detail. Share URL where your project is deployed What are
                callbacks in NodeJS? Round 3 - Manegerial Round Questions asked
                in this round were Introduce yourself You have a family issue
                and you are working on a project, how will you handle that? What
                if your teammates aren’t cooperative, how would you ensure work
                is done on time? Any problems you faced in your project and how
                did you overcome that issue If you have to work in shifts, then
                how will you manage. Will there be any problem if we ask you to
                relocate? If you get stuck at some place or in your project,
                then what will be your approach? If you are working in a team
                for the last 10 years and next year you get promoted as a team
                leader but in the 12th year, you are demoted as a normal team
                member. What will be your reaction? Will you continue to work
                with that team? You are going on vacation but suddenly some
                important work arises in the company. You are not allowed to
                share your username and password. What would you do? Round 4 -
                HR Round Questions asked in this round were Are you comfortable
                with relocation? Do you know about a 1-year bond? What if you
                get on-site in a small country which is totally new to you, how
                would you handle the pressure personally and professionally
                both? Since TCS works on all sorts of old to new technologies,
                what if you get to work on an old domain/technology, how would
                you react? Who is the CEO, chairman and founder of TCS? How many
                employees work in TCS? How much revenue it generates every year?
                Are you ready to accept bonds? Are you comfortable to work in
                night shifts? If we relocate you to Pakistan, will you work
                there? Is there any backlogs? Student will be asked to present
                soft copies of all documents such as 10th Marksheet 12th
                Marksheet Passing Certificates Govt. ID B.Tech Marksheet
              </p>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default CompanyReports;
