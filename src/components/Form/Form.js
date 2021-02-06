import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { FaCircleNotch, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';

import Button from '../Button';
import fakeName from '../../utils/fakeName';

const FormField = ({ name, label, type = 'text', className, ...props }) => (
  <Field name={name}>
    {({
      field, // { name, value, onChange, onBlur }
      meta,
    }) => (
      <label className={className}>
        <p className="block text-green-700 mb-2">{label}</p>
        <input
          className={classNames(
            'w-full border-2 rounded-sm py-3 px-4 focus:border-green-500 bg-sand-100',
            {
              'border-red-700 mb-2': meta.touched && meta.error,
              'border-green-700 mb-4': !(meta.touched && meta.error),
            }
          )}
          type={type}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && (
          <p className="text-red-500 text-s italic mb-3">{meta.error}</p>
        )}
      </label>
    )}
  </Field>
);
FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

const SupportForm = ({ modal = false, closeModal, className }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function generateName(setFieldValue) {
    return function(e) {
      setFieldValue('name', fakeName());
      e.preventDefault();
    };
  }

  return (
    <section
      className={classNames(
        'mx-auto max-w-4xl p-8 py-16 rounded-sm bg-sand-100',
        className,
        {
          'h-full overflow-auto sm:h-auto': modal,
        }
      )}
    >
      <div className="mx-auto max-w-lg">
        <Formik
          initialValues={{
            name: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name =
                'Un nom est obligatoire. Vous souhaitez rester anonyme? Cliquez sur le bouton.';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setError(false);
            fetch(
              'https://us-central1-boxwood-academy-251913.cloudfunctions.net/addRecipient',
              { method: 'POST', body: new URLSearchParams(values) }
            )
              .then(res => res.json())
              .then(res => {
                if (res.err) {
                  setError(true);
                } else {
                  setIsSubmitted(true);
                }
                setSubmitting(false);
              })
              .catch(() => {
                setError(true);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="md:max-w-2xl mx-auto">
              {isSubmitted && !error && (
                <div>
                  <h2 className="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
                    Merci de votre soutien
                  </h2>
                </div>
              )}
              {(!isSubmitted || error) && (
                <React.Fragment>
                  <h2 className="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
                    Je suis un citoyen
                  </h2>

                  <p className="mb-3 text-sm sm:text-base sm:mb-8 sm:text-center">
                    Le soutien des citoyens est la première étape pour
                    l&apos;introduction d&apos;une taxe climatique en France et
                    dans le monde. Montrez votre soutien publiquement pour aider
                    les politiques à prendre conscience de l&apos;ampleur de
                    cette demande.
                  </p>
                  {error && (
                    <div
                      className="border-2 text-red-700 border-red-700 px-4 py-3 rounded-sm mb-4 sm:mb-8"
                      role="alert"
                    >
                      <span>Une erreur à eu lieu. Veuillez réessayer.</span>
                    </div>
                  )}
                  <div className="text-center mb-10">
                    <FormField
                      className="w-full sm:w-1/2 sm:mx-2"
                      name="name"
                      label="Votre nom"
                    />
                    <Button onClick={generateName(setFieldValue)} className="">
                      Je préfère rester anonyme
                    </Button>
                  </div>
                  {isSubmitting ? (
                    <div className="text-4xl text-green-500 sm:flex sm:justify-center">
                      <FaCircleNotch
                        style={{ animation: 'spin 1s infinite ease-in-out' }}
                      />
                    </div>
                  ) : (
                    <Button type="submit" large className="block sm:mx-auto">
                      Donner mon soutien
                    </Button>
                  )}

                  <hr className="m-10" />

                  <h2 className="text-xl font-bold mb-4 sm:text-2xl sm:text-center">
                    Je suis une association
                  </h2>
                  <p className="mb-3 text-sm sm:text-base sm:mb-8 sm:text-center">
                    Contactez nous à l&apos;addresse
                    lemeilleurplanclimatdumonde@gmail.com pour en discuter.
                  </p>
                </React.Fragment>
              )}
              {modal && (
                <button
                  type="button"
                  className="absolute top-0 right-0 cursor-pointer text-xl text-sand-700 hover:text-sand-800 transition ease-in-out duration-200 m-6 sm:m-8"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
              )}
              {modal && (
                <span
                  className="block my-3 sm:mt-6 cursor-pointer sm:hidden"
                  onClick={closeModal}
                >
                  Fermer la fenetre
                </span>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
SupportForm.propTypes = {
  modal: PropTypes.boolean,
  closeModal: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default SupportForm;
