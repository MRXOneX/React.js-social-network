import classes from './FormsControls.module.css'
import Field from "redux-form/lib/Field";

const FormControl = ({input, meta, Formtype, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.form_control + " " + (hasError ? classes.error : "")}>
            <div>
                <Formtype {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}


export const Textarea = (props) => {
    return <FormControl {...props} Formtype="textarea"/>
}


export const Input = (props) => {
    return <FormControl {...props} Formtype="input"/>
}

export const creatField = (placeholder, name, validators, component) => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
        />
    </div>
)