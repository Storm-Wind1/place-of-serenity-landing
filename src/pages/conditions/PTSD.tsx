import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const PTSD = () => {  
  return (
    <ConditionPageLayout
      title="Post Traumatic Stress Disorder"
      subtitle="Trauma-Related Disorders"
      description="Post Traumatic Stress Disorder (PTSD) develops in some people who have experienced a shocking, scary, or dangerous event. While it is natural to feel afraid during and after a traumatic situation, people with PTSD continue to experience symptoms long after the danger has passed. At Place of Serenity, we provide trauma-informed care to help you heal."
      symptoms={[
        "Intrusive memories or flashbacks of the trauma",
        "Nightmares about the traumatic event",
        "Severe emotional distress when reminded of trauma",
        "Physical reactions to reminders of the event",
        "Avoidance of places, activities, or people that remind you of the trauma",
        "Negative changes in thinking and mood",
        "Feelings of hopelessness about the future",
        "Memory problems, including forgetting aspects of the trauma",
        "Difficulty maintaining close relationships",
        "Being easily startled or frightened",
        "Always being on guard (hypervigilance)",
        "Trouble sleeping and concentrating",
      ]}
      treatments={[
        "Trauma-informed psychiatric evaluation to understand your experiences and develop a safe, effective treatment plan.",
        "Trauma-focused Cognitive Behavioral Therapy (TF-CBT) to process traumatic memories and change unhelpful thought patterns.",
        "Eye Movement Desensitisation and Reprocessing (EMDR) to help the brain process traumatic memories.",
        "Prolonged Exposure Therapy to gradually approach trauma-related memories and situations in a safe, controlled way.",
        "Medication management for symptoms of depression, anxiety, or sleep disturbances that often accompany PTSD.",
        "Grounding techniques and coping skills to manage flashbacks and overwhelming emotions.",
        "Group therapy with others who have experienced trauma to reduce isolation and share recovery strategies.",
        "Mind-body approaches including yoga and mindfulness to help regulate the nervous system.",
      ]}
      additionalInfo="Healing from trauma is possible. Our experienced team understands the complexities of PTSD and provides a safe, supportive environment where you can process your experiences at your own pace while building the skills needed for lasting recovery."
    />
  );
};

export default PTSD;
