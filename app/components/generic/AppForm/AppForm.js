import React from "react";
import { Formik } from "formik";

function AppForm({ children, onSubmit, validationSchema, initialValues }) {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
