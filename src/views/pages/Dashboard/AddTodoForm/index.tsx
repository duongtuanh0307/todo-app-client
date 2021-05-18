import React, { FC, useState, FormEvent } from "react";
import {
  addTodoWrapper,
  itemDetail,
  detailInfo,
  metaInfo,
  buttonsGroup,
  actionButton,
  switchOptionStyle,
  inputArea,
} from "./styles.css";
import {
  InputText,
  Button,
  Typography,
  SwitchOption,
  TextArea,
} from "../../../components/primitive";
import { categoryOptions, priorityOptions } from "../constants";

type TodoItem = {
  title: string;
  description: string;
  scheduleFor: string;
  category: string;
  priority: string;
};

type Props = {
  handleCreateTodo: (todoItem: TodoItem) => void;
  handleCancel: () => void;
};

export const AddTodoForm: FC<Props> = ({ handleCreateTodo, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheduleFor, setSchedule] = useState("");
  const [priority, setPriority] = useState<string>("low");
  const [category, setCategory] = useState<string>("private");

  const handleChangeTitle = (event: FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDescription = (event: FormEvent<HTMLTextAreaElement>) => {
    setDescription(event.currentTarget.value);
  };

  const handleChangeSchedule = (event: FormEvent<HTMLInputElement>) => {
    setSchedule(event.currentTarget.value);
  };

  const handleChangeCategory = (nextCategory: string) => {
    setCategory(nextCategory);
  };

  const handleChangePriority = (nextPriority: string) => {
    setPriority(nextPriority);
  };

  const handleCreateNewTodo = () => {
    handleCreateTodo({
      title: title,
      description: description,
      scheduleFor: scheduleFor,
      priority: priority,
      category: category,
    });
  };

  return (
    <div className={addTodoWrapper}>
      <div className={inputArea}>
        <div className={itemDetail}>
          <div className={detailInfo}>
            <Typography component='p' variant='h4'>
              Title: &nbsp;
            </Typography>
            <InputText
              value={title}
              onChange={handleChangeTitle}
              placeHolder='Item title'
            />
          </div>
          <div className={detailInfo}>
            <Typography component='p' variant='h4'>
              Description: &nbsp;
            </Typography>
            <TextArea
              placeHolder='Description'
              rows={3}
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
          <div className={detailInfo}>
            <Typography component='p' variant='h4'>
              Due Date: &nbsp;
            </Typography>
            <InputText
              value={scheduleFor}
              onChange={handleChangeSchedule}
              placeHolder='Ex: 2021-01-01'
            />
          </div>
        </div>
        <div className={metaInfo}>
          <Typography component='p' variant='body3'>
            Category: &nbsp;
          </Typography>
          <SwitchOption
            currentOption={category}
            customeStyle={switchOptionStyle}
            options={categoryOptions}
            handleChangeOption={handleChangeCategory}
          />
          <Typography component='p' variant='body3'>
            Priority: &nbsp;
          </Typography>
          <SwitchOption
            currentOption={priority}
            customeStyle={switchOptionStyle}
            options={priorityOptions}
            handleChangeOption={handleChangePriority}
          />
        </div>
      </div>

      <div className={buttonsGroup}>
        <Button
          customeClass={actionButton}
          size='md'
          variant='primary'
          onClick={handleCreateNewTodo}
        >
          Create Item
        </Button>
        <Button
          customeClass={actionButton}
          size='md'
          variant='default'
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
