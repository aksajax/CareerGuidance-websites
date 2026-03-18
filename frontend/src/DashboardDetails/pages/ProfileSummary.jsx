import ProgressTracker from "./ProgressTracker";
import SkillBadges from "./SkillBadges";
import DreamGoal from "./DreamGoal";
import JobAlerts from "./JobAlerts";
import MentorshipPanel from "./MentorshipPanel";
import RoadmapSection from "./RoadmapSection";
import RecommendedActions from "./RecommendedActions";

function ProfileSummary() {
  return (
    <div className="bg-[#0f0f0f] p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-4">
        Profile Summary
      </h2>

      <div className="grid grid-cols-3 gap-6">

        <ProgressTracker />

        <SkillBadges />

        <DreamGoal />

      </div>
      <div className="grid grid-row-3 gap-6">
          <JobAlerts />

        <MentorshipPanel />

        <RoadmapSection />
        <RecommendedActions />
      </div>

    </div>
  );
}

export default ProfileSummary;