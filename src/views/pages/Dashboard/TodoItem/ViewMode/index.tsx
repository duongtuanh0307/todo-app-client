import React, { FC, useState } from "react";
import {
  todoItemWrapper,
  itemDetail,
  metaInfo,
  actionButtons,
  detailInfo,
  deleteIcon,
  deleteButton,
  editIcon,
  editButton,
  descriptionArea,
  toggleExpandButton,
  viewAllButton,
  customeLabel,
  showLessButton,
} from "./styles.css";
import {
  Typography,
  Label,
  IconButton,
} from "../../../../components/primitive";
import Truncate from "react-truncate";

type Props = {
  title: string;
  description: string;
  scheduleFor: string;
  category: "work" | "private";
  priority: "high" | "normal" | "low";
  handleDelete: () => void;
  handleEdit: () => void;
};

export const ViewMode: FC<Props> = ({
  title,
  description,
  scheduleFor,
  category,
  priority,
  handleEdit,
  handleDelete,
}) => {
  const [truncated, setTruncated] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const toggleShowAll = () => {
    setTruncated(!truncated);
    setExpanded(!expanded);
  };

  return (
    <div className={todoItemWrapper}>
      <div className={itemDetail}>
        <div className={detailInfo}>
          <Typography component='h3' variant='h2'>
            {title}
          </Typography>
        </div>
        <div className={detailInfo}>
          <div className={descriptionArea}>
            <Truncate
              lines={!expanded && 1}
              ellipsis={
                <span>
                  ...
                  <button
                    className={`${viewAllButton} ${toggleExpandButton}`}
                    onClick={toggleShowAll}
                  >
                    View all
                  </button>
                </span>
              }
            >
              {description}
            </Truncate>
            {expanded && !truncated && (
              <button
                className={`${toggleExpandButton} ${showLessButton}`}
                onClick={toggleShowAll}
              >
                Show less
              </button>
            )}
          </div>
        </div>
        <div className={detailInfo}>
          <Typography component='p' variant='h4'>
            Due Date:&nbsp;
          </Typography>
          <Typography component='p' variant='body2'>
            {scheduleFor}
          </Typography>
        </div>
      </div>
      <div className={metaInfo}>
        <Label category={category} customeClass={customeLabel} />
        <Label priority={priority} customeClass={customeLabel} />
      </div>
      <div className={actionButtons}>
        <IconButton
          iconCustomeStyle={deleteIcon}
          buttonCustomeStyle={deleteButton}
          size='sm'
          iconStr='far fa-trash-alt'
          onClick={handleDelete}
        />
        <IconButton
          iconCustomeStyle={editIcon}
          buttonCustomeStyle={editButton}
          size='sm'
          iconStr='fas fa-pen'
          onClick={handleEdit}
        />
      </div>
    </div>
  );
};
