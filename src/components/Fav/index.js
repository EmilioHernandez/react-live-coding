import React, {useState} from "react";
import useUser from "hooks/useUser";
import "./Fav.css";
import Modal from 'components/Modal'
import Login from 'components/Login'

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)
    addFav({id});
  };

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const [
    label,
    emoji
  ] = isFaved
    ? [
      'Remove Gif from favorites',
      '❌'
    ] : [
      'Add Gif to favorites',
      '❤️'
    ]

  return (
    <>
    <button className="gf-Fav" onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
    {showModal && <Modal onClose={handleCloseModal}><Login /></Modal>}
  </>
  );
}
