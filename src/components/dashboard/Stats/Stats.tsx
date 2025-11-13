import { cn } from "@/lib/utils";

export default function Stats() {
  const stats = [
    {
      title: "Unique Visitors",
      count: "24.7K",
      monthlyProgress: 20,
    },
    {
      title: "Total Pageviews",
      count: "55.9K",
      monthlyProgress: 4,
    },
    {
      title: "Bounce Rate",
      count: "54%",
      monthlyProgress: -1.59,
    },
    {
      title: "Visit Duration",
      count: "176",
      monthlyProgress: 7,
    },
  ];

  return (
    <div className="flex items-start justify-between gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="grow rounded-2xl bg-white p-5">
          <p className="text-sm leading-5 text-text-secondary">{stat.title}</p>

          <div className="mt-3 flex items-center justify-between">
            <p className="text-2xl leading-8 font-semibold text-title">
              {stat.count}
            </p>

            <p className="flex items-center gap-2 text-xs">
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-medium",
                  stat.monthlyProgress > 0
                    ? "bg-green-100 text-green-500"
                    : "bg-red-100 text-red-500",
                )}
              >
                {stat.monthlyProgress}%
              </span>
              <span className="text-muted-foreground">Vs last month</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
