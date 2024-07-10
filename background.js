// background.js

function createNotification() {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Reminder',
      message: 'Take a break! It has been 15 minutes.',
      priority: 2
    });
  }
  
  function startReminder() {
    createNotification();
    setInterval(createNotification, 15 * 60 * 1000); // 15 minutes in milliseconds
  }
  
  chrome.runtime.onInstalled.addListener(startReminder);
  