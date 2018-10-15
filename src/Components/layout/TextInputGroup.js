import React from 'react';
import classnames from 'classnames';


    const TextInputGroup= ({label , name ,value,placeholder,type,onChange , error})=> {

        return (
            <div>



                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input type={type}
                           className={classnames('form-control form-control-lg',{'is-invalid':error})}
                           name={name}
                           placeholder={placeholder}
                           value={value}
                           onChange={onChange}
                    />
                    {error && <div className="invalid-feedback">
                        {error}
                    </div>}


                </div>
            </div>
        );

}

// TextInputGroup.propTypes={
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     type: PropTypes.string.isRequired
// }



TextInputGroup.defaultProps = {
    type:'text'
};

export default TextInputGroup;
