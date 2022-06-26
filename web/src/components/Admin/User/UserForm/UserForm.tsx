import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const UserForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Firstname
        </Label>
        
          <TextField
            name="firstname"
            defaultValue={props.user?.firstname}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="lastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lastname
        </Label>
        
          <TextField
            name="lastname"
            defaultValue={props.user?.lastname}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="lastname" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        
          <TextField
            name="email"
            defaultValue={props.user?.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="email" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
