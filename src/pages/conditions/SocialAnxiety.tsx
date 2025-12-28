import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const SocialAnxiety = () => {
  return (
    <ConditionPageLayout
      title="Social Anxiety Disorder"
      subtitle="Anxiety Disorders"
      description="Social Anxiety Disorder (also known as social phobia) is characterised by intense fear or anxiety in social situations where you may be scrutinised or judged by others. This goes beyond normal shyness and can significantly interfere with daily life, work, and relationships. At Place of Serenity, we help you overcome social fears and build confidence."
      symptoms={[
        "Intense fear of social situations",
        "Fear of being judged or humiliated",
        "Avoiding situations where you might be the centre of attention",
        "Worrying for days or weeks before a social event",
        "Blushing, sweating, or trembling in social situations",
        "Difficulty making eye contact",
        "Mind going blank when speaking to others",
        "Nausea or upset stomach around others",
        "Avoiding eating or drinking in front of others",
        "Difficulty speaking to strangers",
        "Fear of speaking on the phone",
        "Analysing performance and finding flaws after social interactions",
      ]}
      treatments={[
        "Comprehensive assessment to understand the specific triggers and impact of your social anxiety.",
        "Cognitive Behavioral Therapy (CBT) to identify and challenge negative thoughts about social situations.",
        "Graduated exposure therapy to gradually face feared social situations in a supportive environment.",
        "Social skills training to build confidence in communication and interpersonal interactions.",
        "Medication management with SSRIs or other appropriate medications to reduce anxiety symptoms.",
        "Group therapy to practice social skills with others who understand social anxiety.",
        "Relaxation and mindfulness techniques to manage physical symptoms of anxiety.",
        "Role-playing exercises to prepare for challenging social situations.",
      ]}
      additionalInfo="Social anxiety is highly treatable. Many people experience significant improvement with proper treatment. Our supportive environment at Place of Serenity allows you to practice new skills and gradually build the confidence needed to engage fully in life."
    />
  );
};

export default SocialAnxiety;
