import React from 'react';
import { FormattedMessage } from "react-intl";
import { Field } from 'redux-form';

import { Page, Card } from '../../components';
import { Icon } from "@blueprintjs/core";
import { MenuSelect } from "./MenuSelect";

import './FirstPage.css';

const styles = {
  icon: {
    fontSize: '4em',
    color: '#A06FEF',      
  },
  controls: {
    height: '45%',
    justifyContent: 'space-around',
  },
  header: {
    height: '30%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
}

const items = ['page1.select.option1', 'page1.select.option2', 'page1.select.option3', 'page1.select.option4', 'page1.select.option5'];

const FirstPage = ({ handleSubmit, pageIndex, intl }) =>
  <Page 
    hasNext={true}
    onNext={handleSubmit}
    pageIndex={pageIndex}
  >
    <Card
      onNext={handleSubmit}
      hasTooltip={true}
      hasNavigation={true}
      tooltipMessage={intl.formatMessage({ id:"page1.tooltip" })}
    >
      <div style={styles.header}>
        <Icon iconName="mugshot" style={styles.icon}/>
        <h4><FormattedMessage id="page1.content"/></h4>
      </div>
      <div className="pt-control-group pt-vertical" style={styles.controls}>
        <Field name="title" component={MenuSelectField}></Field>
        <Field 
          name="firstName"
          className="pt-input pt-large"
          type="text"
          props={{ placeholder: intl.formatMessage({ id: 'page1.placeholder.firstName'}) }} 
          component={InputField}
        />
        <Field
          name="lastName"
          className="pt-input pt-large"
          type="text"
          props={{ placeholder: intl.formatMessage({ id: 'page1.placeholder.lastName'}) }}
          component={InputField}
        />          
      </div>
    </Card>
  </Page>

const MenuSelectField = ({ input, meta: { touched, error } }) => <MenuSelect items={items} isInvalid={Boolean(touched && error)} {...input} defaultOption={"page1.select.default"}/>;
const InputField = ({ input, meta: { touched, error }, placeholder }) =>
  <div>
    <input className={touched && error ? "pt-input pt-fill pt-large pt-intent-danger" : "pt-input pt-fill pt-large"}  {...input} placeholder={placeholder} />
  </div>

export default FirstPage;
