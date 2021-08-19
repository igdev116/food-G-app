import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from 'contexts/AuthContext';
import useFirestoreComments from 'hooks/useFirestoreComments';

// material ui core
import { Avatar } from '@material-ui/core';

// material ui icons
import StarIcon from '@material-ui/icons/Star';

import PrimaryButton from 'components/PrimaryButton';

import './DetailTabUser.scss';
import Dialog from 'components/Dialog';

function DetailTabUser({ colors, commentRef }) {
  const [areaValue, setAreaValue] = useState('');
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isShowDialog, setIsShowDialog] = useState(false);

  const { id } = useParams();

  const { addToFirestore } = useFirestoreComments();
  const { user } = useContext(AuthContext);

  const handleSelectedStar = (pos) => {
    setSelectedStar(pos);
  };

  const handleHoveredStar = (pos) => {
    setHoveredStar(pos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setIsShowDialog(true);
      return;
    }

    const date = new Date().getTime();

    if (!areaValue.trim()) return;

    addToFirestore(id, {
      uname: user.displayName,
      uphoto: user.photoURL,
      content: areaValue,
      rate: selectedStar,
      date,
    });
    setAreaValue('');
    setSelectedStar(0);

    window.scrollTo({
      top: commentRef.current.offsetTop - 200,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='detail-tab-user'>
        <Avatar
          src={user && user.photoURL}
          className='detail-tab-user__avatar'
          alt='Avatar'
        />

        <form onSubmit={handleSubmit} className='detail-tab-user__form'>
          <div className='detail-tab-user__row'>
            <div className='detail-tab-user__rate'>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <StarIcon
                    onClick={() => handleSelectedStar(index + 1)}
                    onMouseOver={() => handleHoveredStar(index + 1)}
                    onMouseLeave={() => handleHoveredStar(0)}
                    style={{
                      fill:
                        index < (selectedStar || hoveredStar)
                          ? colors.yellow
                          : colors.blur,
                    }}
                  />
                ))}
            </div>
            <span className='detail-tab-user__msg'>(Please choose an one)</span>
          </div>
          <textarea
            className='detail-tab-user__textarea'
            placeholder='Type your comment here...'
            onChange={(e) => setAreaValue(e.target.value)}
            value={areaValue}
          />
          <button type='submit'>
            <PrimaryButton subClass='red detail-tab-user__submit'>
              Post comment
            </PrimaryButton>
          </button>
        </form>
      </div>

      <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
    </>
  );
}

export default DetailTabUser;
