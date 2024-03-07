import { initialFriends } from "./data";
import { Friends } from "./Friends";
import { SplitForm } from "./SplitForm";
import { useState } from "react";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSetFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleSelect(friend) {
    setSelectedFriend((curr) => curr?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <Friends
        onClick={handleShowAddFriend}
        onShowAddFriend={showAddFriend}
        friends={friends}
        onSetFriends={handleSetFriends}
        selectedFriend={selectedFriend}
        onSelect={handleSelect}
      />
      {selectedFriend && <SplitForm selectedFriend={selectedFriend} handleSplitBill={handleSplitBill} />}
    </div>
  );
}

export default App;
