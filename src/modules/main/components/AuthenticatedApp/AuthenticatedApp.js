import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatRoom } from "../../../chatRoom/components/ChatRoom/ChatRoom";
import { Landing } from "../../../chatRoom/components/Landing/Landing";

function AuthenticatedApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room/:id" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AuthenticatedApp };
