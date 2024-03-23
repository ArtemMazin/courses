import * as React from 'react';
import cn from 'classnames';
import styles from './form.module.css';
import { Button, Input, Ptag, Rating, TextArea } from '@/components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { fetchReview } from '@/api/review';
import { InputsForm } from '@/interfaces/product.interface';

export interface IFormProps {
  productId: string;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setFail: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Form({ productId, setSuccess, setFail }: IFormProps) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsForm>();

  const onSubmit: SubmitHandler<InputsForm> = async (data) => {
    try {
      const response = await fetchReview(productId, data);
      if (response.message) {
        setSuccess(true);
        reset();
      } else {
        setFail(true);
      }
    } catch (error) {
      setFail(true);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_head}>
        <div className={styles.form_inputs}>
          <Input
            placeholder='Имя'
            error={errors.name}
            {...register('name', { required: { value: true, message: 'Обязательное поле' } })}
          />
          <Input
            placeholder='Заголовок отзыва'
            error={errors.title}
            {...register('title', { required: { value: true, message: 'Обязательное поле' } })}
          />
        </div>
        <div className={styles.form_rating}>
          Оценка:
          <Controller
            control={control}
            name='rating'
            rules={{ required: { value: true, message: 'Поставьте оценку' } }}
            render={({ field: { onChange, value, ref } }) => (
              <Rating
                rating={value}
                ref={ref}
                error={errors.rating}
                setRating={onChange}
                isEditable
              />
            )}
          />
        </div>
      </div>
      <TextArea
        placeholder='Текст отзыва'
        error={errors.description}
        {...register('description', { required: { value: true, message: 'Обязательное поле' } })}
      />
      <div className={styles.form_footer}>
        <Button
          appearance='primary'
          className={styles.form_button}>
          Отправить
        </Button>
        <Ptag size='s'>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</Ptag>
      </div>
    </form>
  );
}
