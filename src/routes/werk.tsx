import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/werk")({ component: WorkLayout });
function WorkLayout() { return <Outlet />; }
