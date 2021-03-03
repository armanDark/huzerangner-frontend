import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPost = styled.div`
  color: inherit;
`;

const Post = ({ id, title }) => {
  return (
    <StyledPost>
      <Link to={`/posts/post/${id}`}>
        <h3>{title}</h3>
      </Link>
    </StyledPost>
  );
};

export default Post;
