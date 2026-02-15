import ConditionPageLayout from "@/components/serenity/ConditionPageLayout";

const EatingDisorders = () => {
  
  return (
    <ConditionPageLayout
      title="Eating Disorders"
      subtitle="Eating & Feeding Disorders"
      description="Eating disorders are serious mental health conditions characterised by severe disturbances in eating behaviours and related thoughts and emotions. They can affect physical health, emotional well-being, and ability to function in daily life. At Place of Serenity, we provide comprehensive treatment addressing both the psychological and physical aspects of eating disorders."
      symptoms={[
        "Preoccupation with weight, food, calories, or dieting",
        "Extreme restriction of food intake",
        "Binge eating (consuming large amounts in short periods)",
        "Purging behaviours (self-induced vomiting, laxatives)",
        "Excessive exercise",
        "Distorted body image",
        "Denial of hunger",
        "Withdrawal from friends and social activities",
        "Development of food rituals",
        "Extreme mood swings",
        "Physical symptoms (fatigue, dizziness, hair loss)",
        "Difficulty concentrating",
      ]}
      treatments={[
        "Medical evaluation and monitoring to address physical health concerns and nutritional deficiencies.",
        "Individual psychotherapy to explore the underlying emotional issues contributing to the eating disorder.",
        "Cognitive Behavioral Therapy for Eating Disorders (CBT-E) to address distorted thoughts about food, weight, and body image.",
        "Nutritional counselling and meal support to establish healthy eating patterns in a supervised environment.",
        "Medication management for co-occurring depression, anxiety, or obsessive-compulsive symptoms.",
        "Family-based treatment (when appropriate) to involve loved ones in the recovery process.",
        "Group therapy to reduce isolation and share experiences with others in recovery.",
        "Body image therapy to develop a healthier relationship with your body.",
      ]}
      additionalInfo="Recovery from eating disorders is possible with proper treatment. Our multidisciplinary team works together to address all aspects of the disorder—physical, psychological, and nutritional—providing the comprehensive care needed for lasting recovery."
    />
  );
};

export default EatingDisorders;
