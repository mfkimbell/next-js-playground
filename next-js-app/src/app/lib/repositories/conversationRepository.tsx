export async function getConversations() {
  try {
    let res = await fetch('http://localhost:3000/api/conversations');
    if (!res.ok) {
      console.error('failed to fetch conversations');
      return null;
    }
    let data = await res.json();
    return data;
  } catch (err) {
    console.error('conversation repository failed call');
    return null;
  }
}
