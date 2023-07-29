let triangle = '';
for (let i = 1; i <= 7; i++) {
  triangle += '*';
  console.log(triangle);
}


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  

  function createChessboard(size) {
    let chessboard = '';
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      }
      chessboard += '\n';
    }
    return chessboard;
  }
  
  const chessboardSize = 8;
  const chessboard = createChessboard(chessboardSize);
  console.log(chessboard);
  

  function canOpenChat(isFriend, isOnline, isNotDisturbMode) {
    return isFriend && isOnline && !isNotDisturbMode;
  }
  
  const isFriend = true;
  const isOnline = true;
  const isNotDisturbMode = false;
  
  if (canOpenChat(isFriend, isOnline, isNotDisturbMode)) {
    console.log('Можно открыть чат с пользователем.');
  } else {
    console.log('Нельзя открыть чат с пользователем.');
  }

  
  function checkSubscription(subscriptionType) {
    return subscriptionType === 'pro' || subscriptionType === 'vip';
  }
  
  
  const userSubscription = 'pro';
  
  if (checkSubscription(userSubscription)) {
    console.log('Доступ к контенту разрешен.');
  } else {
    console.log('Доступ к контенту запрещен. Необходима подписка pro или vip.');
  }
  