import React from 'react';
import { FormCreateTeamProps } from './FormCreateTeamProps';
import FormItem from '../../../../shared/components/FormGroup/FormItem';
import { Form, Formik } from 'formik';
import style from './FormCreateTeam.module.scss';

const FormCreateTeam = () => {
  const initialValues = {
    teamName: '',
    avatar: '',
    submit: 'Create team',
  };
  const onSubmit = value => {
    console.log(value);
  };
  const formProps = {
    initialValues,
    onSubmit,
    // validationSchema: registrationSchema
  };
  // const formElements = FormCreateTeamProps.map( item => {
  //     return <FormItem {...item}/>
  // })
  return (
    <div>
      <h3>Create team</h3>
      <Formik {...formProps}>
        <Form className={style.form}>
          <div className={style.formItem}>
            <FormItem {...FormCreateTeamProps[0]} />
            <FormItem {...FormCreateTeamProps[1]} />
          </div>
          <div className={style.formItem}>
            <span className={style.formCharge}>
              <svg className={style.formChargeLogo}>
                <path
                  className={style.formChargeSvg}
                  d="M5.00724 4.875H6.36357C6.62082 4.875 6.85294 5.07335 6.95149 5.37641C7.05005 5.68029 6.99564 6.02946 6.81356 6.26194L1.72265 12.7619C1.59928 12.9199 1.43653 13 1.27242 13C1.1372 13 1.00109 12.9453 0.886468 12.8333C0.633195 12.5858 0.562082 12.1375 0.720218 11.7844L2.72158 7.3125H0.636298C0.409434 7.3125 0.199672 7.15853 0.0860018 6.90777C-0.0279868 6.65712 -0.0286232 6.34847 0.0838541 6.0969L2.62931 0.409398C2.74242 0.156305 2.95338 0 3.18175 0H6.36357C6.59815 0 6.8138 0.165039 6.92469 0.429203C7.03534 0.693469 7.02324 1.014 6.89303 1.26313L5.00724 4.875Z"
                />
              </svg>
              100
            </span>
            <FormItem {...FormCreateTeamProps[2]} />
          </div>

          {/*{formElements}*/}
        </Form>
      </Formik>
    </div>
  );
};

export default FormCreateTeam;
