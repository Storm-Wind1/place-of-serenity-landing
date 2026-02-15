import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const PersonalityDisorders = () => {
  return (
    <ConditionPageLayout
      title="Personality Disorders"
      subtitle="Personality & Behavioural Disorders"
      description="Personality disorders are a group of mental health conditions characterised by long-term patterns of behaviour, cognition, and inner experience that differ significantly from cultural expectations. These patterns can cause distress and problems in relationships, work, and social situations. At Place of Serenity, we provide specialised treatment to help you develop healthier patterns."
      symptoms={[
        "Difficulty maintaining stable relationships",
        "Intense or unstable emotions",
        "Impulsive behaviours",
        "Distorted self-image",
        "Fear of abandonment",
        "Difficulty trusting others",
        "Patterns of manipulation in relationships",
        "Chronic feelings of emptiness",
        "Extreme sensitivity to criticism",
        "Difficulty understanding others' perspectives",
        "Rigid thinking patterns",
        "Self-harming behaviours (in some cases)",
      ]}
      treatments={[
        "Comprehensive psychological assessment to understand your specific personality patterns and develop an individualised treatment plan.",
        "Dialectical Behavior Therapy (DBT) to develop skills in mindfulness, emotional regulation, distress tolerance, and interpersonal effectiveness.",
        "Schema-focused therapy to identify and change deep-seated patterns that contribute to problematic behaviours.",
        "Mentalisation-based therapy to improve the ability to understand your own and others' mental states.",
        "Medication management for co-occurring symptoms such as depression, anxiety, or mood instability.",
        "Group therapy to practice new interpersonal skills in a supportive, structured environment.",
        "Individual psychotherapy to explore underlying issues and develop healthier coping mechanisms.",
      ]}
      additionalInfo="Treatment for personality disorders takes time and commitment, but meaningful change is possible. Our team provides a consistent, supportive environment where you can safely explore patterns of thinking and behaviour while developing new skills for a more fulfilling life."
    />
  );
};

export default PersonalityDisorders;
