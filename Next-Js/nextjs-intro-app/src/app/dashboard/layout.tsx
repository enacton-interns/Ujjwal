import "../global.css";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;//conditional rendering if false 
  return isLoggedIn ? (
    <div className="p-6 space-y-6">
      <div className="text-2xl">{children}</div>
      <div className="flex gap-4 min-h-[400px] ">
        <div className="flex flex-col gap-4 flex-1">
          <div>{revenue}</div>
          <div>{users}</div>
        </div>

        <div className=" flex flex-col flex-1 ">
          <div className="flex-grow ">{notifications}</div>
        </div>
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
