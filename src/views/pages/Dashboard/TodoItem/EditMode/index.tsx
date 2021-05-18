import React, { FC, useState, FormEvent } from "react";
import {
  editTodoWrapper,
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
} from "../../../../components/primitive";
import { categoryOptions, priorityOptions } from "../../constants";

type TodoItem = {
  title: string;
  description: string;
  scheduleFor: string;
  category: string;
  priority: string;
};

type Props = {
  title: string;
  description: string;
  scheduleFor: string;
  category: "work" | "private";
  priority: "high" | "normal" | "low";
  handleSaveChange: (todoItem: TodoItem) => void;
  handleCancel: () => void;
};

export const EditMode: FC<Props> = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [scheduleFor, setSchedule] = useState(props.scheduleFor);
  const [priority, setPriority] = useState<string>(props.priority);
  const [category, setCategory] = useState<string>(props.category);
  const { handleSaveChange, handleCancel } = props;

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
    handleSaveChange({
      title: title,
      description: description,
      scheduleFor: scheduleFor,
      priority: priority,
      category: category,
    });
  };

  return (
    <div className={editTodoWrapper}>
      <div className={inputArea}>
        <div className={itemDetail}>
          <div className={detailInfo}>
            <Typography component='p' variant='h4'>
              Title: &nbsp;
            </Typography>
            <InputText value={title} onChange={handleChangeTitle} />
          </div>
          <div className={detailInfo}>
            <Typography component='p' variant='h4'>
              Description: &nbsp;
            </Typography>
            <TextArea
              rows={3}
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
          <div className={detailInfo}>
            <Typography component='p' variant='h4'>
              Due Date: &nbsp;
            </Typography>
            <InputText value={scheduleFor} onChange={handleChangeSchedule} />
          </div>
        </div>
        <div className={metaInfo}>
          <Typography component='p' variant='body3'>
            Category: &nbsp;
          </Typography>
          <SwitchOption
            customeStyle={switchOptionStyle}
            options={categoryOptions}
            handleChangeOption={handleChangeCategory}
            currentOption={category}
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
          Save Change
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
