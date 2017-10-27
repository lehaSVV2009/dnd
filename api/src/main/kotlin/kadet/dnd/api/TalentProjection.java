package kadet.dnd.api;

import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

@Projection(name = "talent", types = {Talent.class})
public interface TalentProjection {

  String getId();

  String getLimitType();

  String getActionType();

  String getTitle();

  String getDescription();

  Set<String> getRequirements();

  String getGoal();

  String getDistance();

  String getAttack();

  String getHit();

  String getMiss();

  String getEffect();

  String getSpeciality();

  Integer getLevel();
}
