import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const LodgingForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.lodging?.id)
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
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>
        
          <TextField
            name="url"
            defaultValue={props.lodging?.url}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="Type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        
          <TextField
            name="Type"
            defaultValue={props.lodging?.Type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="Type" className="rw-field-error" />

        <Label
          name="area"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Area
        </Label>
        
          <NumberField
            name="area"
            defaultValue={props.lodging?.area}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="area" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>
        
          <TextField
            name="city"
            defaultValue={props.lodging?.city}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>
        
          <NumberField
            name="price"
            defaultValue={props.lodging?.price}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        
          <TextField
            name="description"
            defaultValue={props.lodging?.description}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="longitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Longitude
        </Label>
        
          <NumberField
            name="longitude"
            defaultValue={props.lodging?.longitude}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="longitude" className="rw-field-error" />

        <Label
          name="latitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Latitude
        </Label>
        
          <NumberField
            name="latitude"
            defaultValue={props.lodging?.latitude}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="latitude" className="rw-field-error" />

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

export default LodgingForm
