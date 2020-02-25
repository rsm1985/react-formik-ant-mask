import React from "react"
import { Formik } from "formik"
import MaskedInput from 'antd-mask-input'
import InputMask from 'react-input-mask'

import {
    SubmitButton,
    Input,
    Checkbox,
    ResetButton,
    FormikDebug,
    Form,
    FormItem,
} from "formik-antd"
// import { message, Button } from "antd"

const CustomInput = props => (
    <InputMask {...props}>{inputProps => <Input {...inputProps} />}</InputMask>
);

const CloseForm = () => (
    <Formik
        initialValues={{ phone: "" , lastName: ""}}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }}
        validate={(values) => {
            const chars = values.phone.split('');
            const notComplete = chars.find((item)=>item==="_")
            // console.log(chars)
            if (!values.phone || notComplete) {
                return { phone: "Обязательное поле" }
            }
            return {}
        }}
    >
        {({ isSubmitting, setFieldValue }) => {
            return (
                <Form>
                    <FormItem name="phone" label="Phone" required="true" >
                        <CustomInput
                            mask="+7 (999) 999-99-99"
                            name="phone"
                            placeholder="+7 (___) ___-__-__"
                            onChange={e => {
                                setFieldValue("phone", e.target.value);
                            }}
                        />
                    </FormItem>
                    <FormItem name="lastName" label="Lastname" required={true} validate={validateRequired}>
                        <Input name="lastName" />
                    </FormItem>
                    <SubmitButton type="primary" disabled={isSubmitting}>
                        Submit
                    </SubmitButton>
                </Form>
            );
        }}
    </Formik>
);





//
function validateRequired(value) {
    return value ? undefined : "Обязательное поле"
}
// const CustomInput = props => (
//     <InputMask {...props}>{inputProps => <Input {...inputProps} />}</InputMask>
// );
//  const SampleForm = () => {
//     return (
//         <div
//             style={{
//                 marginTop: 80,
//                 maxWidth: 700,
//                 marginRight: "auto",
//                 marginLeft: "auto",
//             }}
//         >
//             <Formik
//                 initialValues={{
//                     firstName: "",
//                     lastName: "",
//                     email: "",
//                     password: "",
//                     phone: "",
//                     newsletter: false,
//                 }}
//                 onSubmit={(values, actions) => {
//                     message.info(JSON.stringify(values, null, 4))
//                     actions.setSubmitting(false)
//                     actions.resetForm()
//                 }}
//                 validate={(values) => {
//                     if (!values.lastName) {
//                         return { lastName: "required" }
//                     }
//                     if (!values.newsletter) {
//                         return { newsletter: "required" }
//                     }
//                     if (!values.phone) {
//                         return { phone: "required" }
//                     }
//                     return {}
//                 }}
//                 render={() => (
//                     <Form style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//                         <div>
//                             <Button.Group style={{ marginBottom: 20 }}>
//                                 <ResetButton>Reset</ResetButton>
//                                 <SubmitButton>Submit</SubmitButton>
//                             </Button.Group>
//
//                             <FormItem
//                                 name="firstName"
//                                 label="Firstname"
//                                 required={true}
//                                 validate={validateRequired}
//                             >
//                                 <Input name="firstName" placeholder="Firstname" />
//                             </FormItem>
//                             {/*<FormItem name="lastName" label="Lastname" required={true}>*/}
//                                 {/*<Input name="lastName" placeholder="Lastname" />*/}
//                             {/*</FormItem>*/}
//                             <FormItem name="email" label="Email">
//                                 <Input name="email" placeholder="Email" />
//                             </FormItem>
//                             <FormItem name="phone" label="Phone" required={true} validate={validateRequired}>
//                                 <Input name="phone" placeholder="Phone" />
//                                 <CustomInput
//                                     mask="+7 (999) 999-99-99"
//                                     name="phone"
//                                     onChange={e => {
//                                         const value = e.target.value || "";
//                                         const changedValue = value
//                                             .replace(/\)/g, "")
//                                             .replace(/\(/g, "")
//                                             .replace(/-/g, "")
//                                             .replace(/ /g, "");
//                                         console.log({ value });
//                                         console.log({ changedValue });
//                                         setFieldValue("phone", value);
//                                     }}
//                                 />
//                             </FormItem>
//                             {JSON.stringify(FormikDebug)}
//                             <FormItem name="password" label="Password">
//                                 <Input.Password name="password" placeholder="Password" />
//                             </FormItem>
//                             <FormItem name="newsletter" required={true} validate={validateRequired}>
//                                 <Checkbox name="newsletter">Newsletter</Checkbox>
//                             </FormItem>
//                         </div>
//                         <FormikDebug />
//                     </Form>
//                 )}
//             />
//         </div>
//     )
// }
//
// export default SampleForm;
export default CloseForm