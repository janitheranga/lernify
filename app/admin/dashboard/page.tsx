"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Home,
  Users,
  BookOpen,
  FileText,
  Settings,
  BarChart3,
  DollarSign,
  TrendingUp,
  UserPlus,
  Activity,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DoughnutChart } from "@/components/dashboard/doughnut-chart";
import { LineChart } from "@/components/dashboard/line-chart";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Modal } from "@/components/ui/modal";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "dashboard" },
  { icon: Users, label: "Users", href: "users" },
  { icon: BookOpen, label: "Courses", href: "courses" },
  { icon: FileText, label: "Content", href: "content" },
  { icon: BarChart3, label: "Analytics", href: "analytics" },
  { icon: DollarSign, label: "Revenue", href: "revenue" },
  { icon: Settings, label: "Settings", href: "settings" },
];

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = React.useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />;
      case "users":
        return <UsersSection />;
      case "courses":
        return <CoursesManagement />;
      case "content":
        return <ContentManagement />;
      case "analytics":
        return <AnalyticsSection />;
      case "revenue":
        return <RevenueSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader userType="admin" />

      <div className="flex flex-1">
        <Sidebar
          items={sidebarItems}
          activeItem={activeSection}
          onItemClick={setActiveSection}
        />

        <main className="flex-1 p-6 bg-linear-to-br from-[var(--color-mint-cream-50)] to-[var(--color-dark-slate-grey-50)]">
          {renderContent()}
        </main>
      </div>

      <DashboardFooter />
    </div>
  );
}

function DashboardOverview() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor and manage your LMS platform
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Users,
            label: "Total Users",
            value: "15,234",
            change: "+12%",
            color:
              "from-[var(--color-muted-teal-500)] to-[var(--color-muted-teal-600)]",
          },
          {
            icon: BookOpen,
            label: "Active Courses",
            value: "256",
            change: "+8%",
            color:
              "from-[var(--color-frosted-mint-500)] to-[var(--color-frosted-mint-600)]",
          },
          {
            icon: DollarSign,
            label: "Revenue (Month)",
            value: "$42.5K",
            change: "+23%",
            color:
              "from-[var(--color-old-gold-500)] to-[var(--color-old-gold-600)]",
          },
          {
            icon: TrendingUp,
            label: "Completion Rate",
            value: "87%",
            change: "+5%",
            color:
              "from-[var(--color-mint-cream-500)] to-[var(--color-mint-cream-600)]",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-green-600 font-semibold">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LineChart
            title="User Growth"
            data={[
              { label: "Jan", value: 1200 },
              { label: "Feb", value: 1900 },
              { label: "Mar", value: 2400 },
              { label: "Apr", value: 3200 },
              { label: "May", value: 4100 },
              { label: "Jun", value: 5000 },
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <DoughnutChart
            title="User Distribution"
            data={[
              {
                label: "Active",
                value: 12500,
                color: "var(--color-frosted-mint-500)",
              },
              {
                label: "Inactive",
                value: 2000,
                color: "var(--color-dark-slate-grey-300)",
              },
              { label: "New", value: 734, color: "var(--color-old-gold-500)" },
            ]}
          />
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest platform activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "John Doe",
                  action: "enrolled in",
                  course: "Web Development",
                  time: "2 minutes ago",
                },
                {
                  user: "Jane Smith",
                  action: "completed",
                  course: "Data Science",
                  time: "15 minutes ago",
                },
                {
                  user: "Mike Johnson",
                  action: "started",
                  course: "Mobile Development",
                  time: "1 hour ago",
                },
                {
                  user: "Sarah Wilson",
                  action: "earned certificate for",
                  course: "Cloud Computing",
                  time: "2 hours ago",
                },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white hover:shadow-md transition-all cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-muted-teal-500)] to-[var(--color-frosted-mint-500)] flex items-center justify-center text-white font-semibold">
                      {activity.user[0]}
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        {activity.action}{" "}
                        <span className="font-semibold">{activity.course}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function UsersSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      courses: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      courses: 8,
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      courses: 3,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      courses: 12,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Users Management</h1>
          <p className="text-muted-foreground">Manage platform users</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--color-dark-slate-grey-100)]">
                <tr>
                  <th className="text-left p-4 font-semibold">Name</th>
                  <th className="text-left p-4 font-semibold">Email</th>
                  <th className="text-left p-4 font-semibold">Courses</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                  <th className="text-left p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    className="border-b hover:bg-[var(--color-mint-cream-100)] transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="p-4 font-medium">{user.name}</td>
                    <td className="p-4 text-muted-foreground">{user.email}</td>
                    <td className="p-4">{user.courses}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New User"
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userName">Name</Label>
            <Input id="userName" placeholder="Enter user name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userEmail">Email</Label>
            <Input id="userEmail" type="email" placeholder="user@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userRole">Role</Label>
            <select
              id="userRole"
              className="w-full h-10 rounded-md border border-input bg-background px-3 cursor-pointer"
            >
              <option>Student</option>
              <option>Instructor</option>
              <option>Admin</option>
            </select>
          </div>
          <Button className="w-full">Create User</Button>
        </form>
      </Modal>
    </div>
  );
}

function CoursesManagement() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Courses Management</h1>
          <p className="text-muted-foreground">Create and manage courses</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <BookOpen className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((course, index) => (
          <motion.div
            key={course}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <div className="h-32 bg-gradient-to-br from-[var(--color-muted-teal-500)] to-[var(--color-frosted-mint-600)]" />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Course Title {course}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {150 + course * 10} students enrolled
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Course"
      >
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="courseTitle">Course Title</Label>
            <Input id="courseTitle" placeholder="Enter course title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="courseDescription">Description</Label>
            <Textarea
              id="courseDescription"
              placeholder="Course description..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coursePrice">Price</Label>
            <Input id="coursePrice" type="number" placeholder="0.00" />
          </div>
          <Button className="w-full">Create Course</Button>
        </form>
      </Modal>
    </div>
  );
}

function ContentManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Content Management</h1>
        <p className="text-muted-foreground">
          Manage course content and resources
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Video Library</CardTitle>
          <CardDescription>Manage video content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((video) => (
              <div
                key={video}
                className="aspect-video bg-[var(--color-dark-slate-grey-200)] rounded-lg flex items-center justify-center hover:bg-[var(--color-dark-slate-grey-300)] transition-colors cursor-pointer"
              >
                <Activity className="w-12 h-12 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Platform performance metrics</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <LineChart
          title="Course Enrollments"
          data={[
            { label: "Week 1", value: 120 },
            { label: "Week 2", value: 180 },
            { label: "Week 3", value: 150 },
            { label: "Week 4", value: 220 },
          ]}
          color="var(--color-muted-teal-600)"
        />

        <DoughnutChart
          title="Revenue by Category"
          data={[
            {
              label: "Technology",
              value: 45000,
              color: "var(--color-muted-teal-500)",
            },
            {
              label: "Business",
              value: 30000,
              color: "var(--color-frosted-mint-500)",
            },
            {
              label: "Design",
              value: 15000,
              color: "var(--color-old-gold-500)",
            },
            {
              label: "Marketing",
              value: 10000,
              color: "var(--color-mint-cream-500)",
            },
          ]}
        />
      </div>
    </div>
  );
}

function RevenueSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Revenue</h1>
        <p className="text-muted-foreground">
          Financial overview and transactions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Total Revenue", value: "$125,400", change: "+15%" },
          { label: "This Month", value: "$42,500", change: "+23%" },
          { label: "Pending", value: "$8,200", change: "+5%" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-green-600 font-semibold">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <LineChart
        title="Revenue Over Time"
        data={[
          { label: "Jan", value: 32000 },
          { label: "Feb", value: 38000 },
          { label: "Mar", value: 35000 },
          { label: "Apr", value: 42000 },
          { label: "May", value: 45000 },
          { label: "Jun", value: 52000 },
        ]}
        color="var(--color-old-gold-600)"
      />
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
        <p className="text-muted-foreground">Configure platform settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platformName">Platform Name</Label>
            <Input id="platformName" defaultValue="Lernify" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input
              id="supportEmail"
              type="email"
              defaultValue="support@lernify.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="platformDescription">Description</Label>
            <Textarea
              id="platformDescription"
              placeholder="Platform description..."
            />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
