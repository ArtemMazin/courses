import * as React from 'react';
import cn from 'classnames';
import styles from './form.module.css';
import { Button, Input, Ptag, Rating, TextArea } from '@/components';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

export interface IFormProps {}

interface Inputs {
  name: string;
  title: string;
  rating: number;
  text: string;
}

export function Form(props: IFormProps) {
  const { control, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_head}>
        <div className={styles.form_inputs}>
          <Input placeholder='Имя' />
          <Input placeholder='Заголовок отзыва' />
        </div>
        <div className={styles.form_rating}>
          Оценка:
          <Controller
            control={control}
            name='rating'
            render={({ field }) => (
              <Rating
                rating={field.value}
                onChange={field.onChange}
                isEditable
              />
            )}
          />
        </div>
      </div>
      <TextArea placeholder='Текст отзыва' />
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
