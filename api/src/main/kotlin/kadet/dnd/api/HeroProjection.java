package kadet.dnd.api;

import org.springframework.data.rest.core.config.Projection;

import java.util.Set;

@Projection(name = "hero", types = { Hero.class })
public interface HeroProjection {

  String getId();

  Profile getProfile();

  Condition getCondition();

  Protections getProtections();

  Characteristics getCharacteristics();

  Skills getSkills();

  Set<TalentProjection> getTalents();
}
