import { FriendItem } from "./FriendItem";
import { AddFriend } from "./AddFriend";
import { Button } from "./Button";

export const Friends = ({
  onClick,
  onShowAddFriend,
  friends,
  onSetFriends,
  onSelect,
  selectedFriend,
}) => {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <FriendItem friend={friend} key={friend.id} onSelect={onSelect} selectedFriend={selectedFriend} />
        ))}
      </ul>

      {onShowAddFriend && <AddFriend onSetFriends={onSetFriends} />}
      <Button onClick={onClick} >
        {onShowAddFriend ? "Close" : "Add friend"}
      </Button>
    </div>
  );
};
