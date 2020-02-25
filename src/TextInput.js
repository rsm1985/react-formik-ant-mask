import React from "react";
import { Form, Input } from "antd";
const TextInput = ({
                       values,
                       errors,
                       handleSubmit,
                       setFieldValue,
                       setFieldTouched,
                       name
                   }) => (
    <Form.Item
        hasFeedback={!!errors[name]}
        validateStatus={errors[name] && "error"}
        help={errors[name]}
    >
        <Input
            placeholder="Basic usage"
        value={name}
        onChange={event => setFieldValue(name, event.target.value)}
        onBlur={() => setFieldTouched(name)}
        onPressEnter={handleSubmit}
    />
</Form.Item>
);
export default TextInput;