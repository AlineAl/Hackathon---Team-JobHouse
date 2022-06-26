import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const JobForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.job?.id)
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
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.job?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="salary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salary
        </Label>
        
          <NumberField
            name="salary"
            defaultValue={props.job?.salary}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="salary" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.job?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="employer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Employer
        </Label>
        
          <TextField
            name="employer"
            defaultValue={props.job?.employer}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="employer" className="rw-field-error" />

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

export default JobForm
