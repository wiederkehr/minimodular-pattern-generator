/** @jsx jsx */
import React from "react";
import { jsx, Button, Label, Select, Input } from "theme-ui";
import { Formik, Form, Field } from "formik";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";
import Canvas from "../components/Canvas";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "roll-top",
      height: 100,
      width: 200,
      webbing: 10,
      allowance: 20,
    };
  }

  render() {
    return (
      <React.Fragment>
        <AppSidebar>
          <Formik
            initialValues={{
              width: this.state.width,
              height: this.state.height,
              allowance: this.state.allowance,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                console.log(JSON.stringify(this.state, null, 2));
                setSubmitting(false);
              }, 300);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Label>Final Bag Width</Label>
                <Field mb="3" type="number" name="width" as={Input} />
                <Label>Final Bag Height</Label>
                <Field mb="3" type="number" name="height" as={Input} />
                <Label>Seam Allowance</Label>
                <Field mb="4" type="number" name="allowance" as={Input} />
                <Button type="submit" disabled={isSubmitting}>
                  Download Pattern
                </Button>
              </Form>
            )}
          </Formik>
        </AppSidebar>
        <AppMain>
          <Canvas />
        </AppMain>
      </React.Fragment>
    );
  }
}
