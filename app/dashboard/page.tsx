"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Home,
  BookOpen,
  Video,
  Award,
  Settings,
  BarChart,
  Clock,
  TrendingUp,
  Play,
  CheckCircle,
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

const sidebarItems = [
  { icon: Home, label: "Overview", href: "overview" },
  { icon: BookOpen, label: "My Courses", href: "courses" },
  { icon: Video, label: "Learning Path", href: "learning" },
  { icon: Award, label: "Certificates", href: "certificates" },
  { icon: BarChart, label: "Progress", href: "progress" },
  { icon: Settings, label: "Settings", href: "settings" },
];

export default function UserDashboard() {
  const [activeSection, setActiveSection] = React.useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "courses":
        return <CoursesSection />;
      case "learning":
        return <LearningPathSection />;
      case "certificates":
        return <CertificatesSection />;
      case "progress":
        return <ProgressSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col m-4">
      <DashboardHeader userType="user" />

      <div className="flex flex-1">
        <Sidebar
          items={sidebarItems}
          activeItem={activeSection}
          onItemClick={setActiveSection}
        />

        <main className="flex-1 p-6 bg-linear-to-br from-(--color-mint-cream-50) to-(--color-dark-slate-grey-50)">
          {renderContent()}
        </main>
      </div>

      <DashboardFooter />
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
        <p className="text-muted-foreground">
          Here&apos;s your learning progress overview
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: BookOpen,
            label: "Enrolled Courses",
            value: "12",
            color:
              "from-[var(--color-muted-teal-500)] to-[var(--color-muted-teal-600)]",
          },
          {
            icon: CheckCircle,
            label: "Completed",
            value: "8",
            color:
              "from-[var(--color-frosted-mint-500)] to-[var(--color-frosted-mint-600)]",
          },
          {
            icon: Clock,
            label: "Hours Learned",
            value: "142",
            color:
              "from-[var(--color-old-gold-500)] to-[var(--color-old-gold-600)]",
          },
          {
            icon: Award,
            label: "Certificates",
            value: "5",
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
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
            title="Weekly Learning Activity"
            data={[
              { label: "Mon", value: 4 },
              { label: "Tue", value: 6 },
              { label: "Wed", value: 5 },
              { label: "Thu", value: 8 },
              { label: "Fri", value: 7 },
              { label: "Sat", value: 9 },
              { label: "Sun", value: 6 },
            ]}
            metricLabel="Hours"
            formatter={(v) => `${v}h`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <DoughnutChart
            title="Course Progress"
            data={[
              {
                label: "Completed",
                value: 8,
                color: "var(--color-frosted-mint-500)",
              },
              {
                label: "In Progress",
                value: 4,
                color: "var(--color-old-gold-500)",
              },
              {
                label: "Not Started",
                value: 3,
                color: "var(--color-dark-slate-grey-300)",
              },
            ]}
          />
        </motion.div>
      </div>

      {/* Continue Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Continue Learning</CardTitle>
            <CardDescription>Pick up where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Advanced React Patterns",
                  progress: 65,
                  time: "2h 15m left",
                },
                {
                  title: "TypeScript Fundamentals",
                  progress: 80,
                  time: "45m left",
                },
              ].map((course, index) => (
                <motion.div
                  key={course.title}
                  className="bg-linear-to-br from-white to-(--color-mint-cream-100) rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="font-semibold mb-2">{course.title}</h4>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1 h-2 bg-(--color-dark-slate-grey-200) rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-(--color-muted-teal-500) to-(--color-frosted-mint-500)"
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.time}
                    </span>
                    <Button size="sm">
                      <Play className="w-4 h-4 mr-1" />
                      Continue
                    </Button>
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

function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      instructor: "John Doe",
      progress: 75,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Jane Smith",
      progress: 45,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Mobile App Development",
      instructor: "Mike Johnson",
      progress: 30,
      rating: 4.7,
    },
    {
      id: 4,
      title: "Cloud Architecture",
      instructor: "Sarah Wilson",
      progress: 90,
      rating: 4.9,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-muted-foreground">Manage your enrolled courses</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>by {course.instructor}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-(--color-dark-slate-grey-200) rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-(--color-muted-teal-500) to-(--color-frosted-mint-500)"
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">⭐ {course.rating}</span>
                    <Button>Continue</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LearningPathSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Path</h1>
        <p className="text-muted-foreground">
          Your personalized learning journey
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frontend Development Path</CardTitle>
          <CardDescription>Master modern web development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: "HTML & CSS Basics", status: "completed" },
              { title: "JavaScript Fundamentals", status: "completed" },
              { title: "React.js", status: "in-progress" },
              { title: "TypeScript", status: "locked" },
              { title: "Next.js", status: "locked" },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="flex items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-all cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.status === "completed"
                      ? "bg-linear-to-br from-(--color-frosted-mint-500) to-(--color-frosted-mint-600)"
                      : step.status === "in-progress"
                      ? "bg-linear-to-br from-(--color-old-gold-500) to-(--color-old-gold-600)"
                      : "bg-(--color-dark-slate-grey-300)"
                  }`}
                >
                  {step.status === "completed" && (
                    <CheckCircle className="w-5 h-5 text-white" />
                  )}
                  {step.status === "in-progress" && (
                    <Play className="w-5 h-5 text-white" />
                  )}
                  {step.status === "locked" && (
                    <span className="text-white text-xs">🔒</span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-sm text-muted-foreground capitalize">
                    {step.status.replace("-", " ")}
                  </p>
                </div>
                {step.status !== "locked" && (
                  <Button
                    variant={
                      step.status === "completed" ? "outline" : "default"
                    }
                  >
                    {step.status === "completed" ? "Review" : "Continue"}
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CertificatesSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Certificates</h1>
        <p className="text-muted-foreground">Your earned certifications</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((cert, index) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-xl transition-all cursor-pointer">
              <div className="h-40 bg-linear-to-br from-(--color-muted-teal-500) to-(--color-frosted-mint-600) flex items-center justify-center relative overflow-hidden">
                <Award className="w-16 h-16 text-white/20 absolute" />
                <Award className="w-12 h-12 text-white z-10" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">
                  Course Certificate {cert}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Completed: Dec {cert}, 2025
                </p>
                <Button className="w-full" size="sm">
                  Download
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProgressSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Progress</h1>
        <p className="text-muted-foreground">Track your learning statistics</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <LineChart
          title="Monthly Learning Hours"
          data={[
            { label: "Jan", value: 15 },
            { label: "Feb", value: 22 },
            { label: "Mar", value: 18 },
            { label: "Apr", value: 28 },
            { label: "May", value: 25 },
            { label: "Jun", value: 32 },
          ]}
          color="var(--color-frosted-mint-600)"
          metricLabel="Hours"
          formatter={(v) => `${v}h`}
        />

        <DoughnutChart
          title="Skills Distribution"
          data={[
            {
              label: "Frontend",
              value: 45,
              color: "var(--color-muted-teal-500)",
            },
            {
              label: "Backend",
              value: 30,
              color: "var(--color-frosted-mint-500)",
            },
            { label: "DevOps", value: 15, color: "var(--color-old-gold-500)" },
            {
              label: "Design",
              value: 10,
              color: "var(--color-mint-cream-500)",
            },
          ]}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                title: "Fast Learner",
                description: "Completed 3 courses in a month",
                icon: "🚀",
              },
              {
                title: "Consistent",
                description: "7 day learning streak",
                icon: "🔥",
              },
              {
                title: "Perfectionist",
                description: "Scored 100% on 5 quizzes",
                icon: "⭐",
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="flex items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-all cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself..." />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              label: "Email notifications",
              description: "Receive updates via email",
            },
            {
              label: "Course reminders",
              description: "Get reminders for your courses",
            },
            {
              label: "Achievement alerts",
              description: "Notify when you earn achievements",
            },
          ].map((setting) => (
            <div
              key={setting.label}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{setting.label}</p>
                <p className="text-sm text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="cursor-pointer"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
